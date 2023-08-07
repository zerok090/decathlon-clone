/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    return {
        search: params.slug
    }
}