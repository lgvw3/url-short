'use client'

import { createShortURL } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { FormSubmitButton } from "./form-submit-button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { getLongURL } from "@/lib/data";

export default function CreateShortForm() {

    const initialState = { message: '', errors: {} };
    const [state, dispatch] = useFormState(createShortURL, initialState);

    const [shortURL, setShortURL] = useState<string | null>()

    useEffect(() => {
        if (state.message && state.message != '') {
            if (state.message == 'Success') {
                toast.success('Congrats! Short URL Aquired!')
                setShortURL(state.shortURL)
            }
            else {
                toast.warning(state.message)
            }
        }
    }, [state])

    const navigateWithShortURL = async () => {
        if (shortURL) {
            const longURL = await getLongURL(shortURL)
            if (!longURL) {
                toast.warning("No Matching URL")
            }
            else {
                window.location.href = longURL
            }
        }
        else {
            toast.warning('No matching URL')
        }
    }

    return (
    <>
        <form
        action={dispatch}
        >
            <Card className="max-w-4xl min-w-[500px]">
                <CardHeader>
                    <CardTitle>Start Here</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row">
                        <Label htmlFor="initial-url">Your Long URL</Label>
                        <Input id="initial-url" name="initial-url"/>
                    </div>
                    <div id="initial-url-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.initialURL &&
                        state.errors?.initialURL.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <FormSubmitButton />
                </CardFooter>
            </Card>
        </form>
        {
            shortURL ?
            <Card className="max-w-4xl min-w-[500px] my-4">
                <CardHeader>
                    <CardTitle>Your New URL!</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button 
                        variant={'link'}
                        onClick={navigateWithShortURL}
                    >
                        {
                            shortURL
                        }
                    </Button>
                </CardContent>
            </Card>
            : null
        }
    </>
    );
}