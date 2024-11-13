'use client'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Terminal, Verified, VerifiedIcon } from 'lucide-react';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

export default function UploadWorkForm() {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');
    const handleImageUpload = (result: any) => {
        if (result?.info?.secure_url) {
            console.log(result?.info?.secure_url)
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
            body: JSON.stringify({ title, image: imageUrl, description, technologies }),
        });

        if (response.ok) {
            alert('Success, work added.')
        } else {
            alert('Failed to add work');
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
                            required
                        />
                        <Input
                            type="text"
                            value={technologies}
                            onChange={(e) => setTechnologies(e.target.value)}
                            placeholder="Technologies (comma separated)"
                            required
                        />
                    </CardContent>
                    <CardFooter className='flex flex-col gap-2'>
                        <div className='flex gap-2 justify-between w-full'>
                            <CldUploadButton
                                className='border rounded-lg border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground py-1 px-2'
                                uploadPreset='portfolio2.0 uploads'
                                onSuccess={handleImageUpload}
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
