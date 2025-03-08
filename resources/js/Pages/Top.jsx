import GuestLayout from '@/Layouts/GuestLayout';
import { useEffect } from 'react';

export default function Top(props) {
    useEffect(() => {
        console.log('Top page mounted')
    }, [])

    return (
        <>
            <GuestLayout>
                <h1>{props.greeting} InertiaJS</h1>
            </GuestLayout>
        </>
    )
}
