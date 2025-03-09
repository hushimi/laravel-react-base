import { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';


const Top = (props) => {
    useEffect(() => {
        console.log('Top page mounted')
    }, [])

    return (
        <>
            <Head><title>Top</title></Head>
            <h1>{props.greeting} InertiaJS</h1>
        </>
    )
}

Top.layout = (page) => <GuestLayout children={page} />

export default Top
