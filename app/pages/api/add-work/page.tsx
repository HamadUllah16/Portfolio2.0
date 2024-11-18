'use client'
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { CldUploadButton, } from 'next-cloudinary';
import { useState } from 'react';
import { toast } from 'sonner';


export default function UploadWorkForm() {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [github, setGithub] = useState('');
    const [preview, setPreview] = useState('');

    const handleImageUpload = (result: any) => {
        if (result?.info?.secure_url) {
            console.log(result.info.secure_url);
            setImageUrl(result.info.secure_url);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!imageUrl) {
            alert('Please upload an image');
            return;
        }

        const response = await fetch('/api/work', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, image: imageUrl, description, technologies, github, preview }),
        });

        if (response.ok) {
            toast.success('Success, work added.')
        } else {
            toast.error('Error, could not add work.')
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='w-full items-center px-72 py-10'>
                <Card>
                    <CardHeader>
                        <CardTitle>Add Work</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-2'>
                        <Input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                            required
                        />
                        <Textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"

                        />
                        <Input
                            type="text"
                            value={technologies}
                            onChange={(e) => setTechnologies(e.target.value)}
                            placeholder="Technologies (comma separated)"
                            required
                        />
                        <Input
                            type="text"
                            value={github}
                            onChange={(e) => setGithub(e.target.value)}
                            placeholder="www.github.com/HamadUllah16/Portfolio2.0"
                            required
                        />
                        <Input
                            type="text"
                            value={preview}
                            onChange={(e) => setPreview(e.target.value)}
                            placeholder="www.hamad-portfolio.vercel.app"
                            required
                        />
                    </CardContent>
                    <CardFooter className='flex flex-col gap-2'>
                        <div className='flex gap-2 justify-between w-full'>
                            <CldUploadButton
                                className='border rounded-lg border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground py-1 px-2'
                                uploadPreset='portfolio2.0 uploads'
                                onSuccess={(e) => handleImageUpload(e.info)}
                            >
                                Upload Image
                            </CldUploadButton>
                            {imageUrl && (
                                <div className='bg-slate-400 rounded-md overflow-hidden shadow-lg'>
                                    <img src={imageUrl} alt="Uploaded Image" style={{ maxWidth: '100px' }} />
                                </div>
                            )}
                        </div>

                        <Button type='submit' variant={'default'}>
                            Add Work
                        </Button>
                    </CardFooter>
                </Card>
            </div>

        </form>
    );
}
