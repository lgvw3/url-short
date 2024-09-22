import CreateShortForm from '@/components/create-short-form';
import { getLongURL } from '@/lib/data';
import { redirect } from 'next/navigation';

// no local storage access in middleware in nextjs since it currently runs on the edge so this is the next best thing
export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const shortURL = 'http://localhost:8080/' + slug
    console.log(shortURL)

    const longURL = await getLongURL(shortURL)

    if (longURL) {
        redirect(longURL)
    }

    return (
        <div className="flex flex-col  items-center">
            <h1>
                No matching URL, try creating one instead
            </h1>
            <CreateShortForm />
        </div>
    )
}
