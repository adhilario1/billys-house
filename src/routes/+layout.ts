import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => {
    return {
        sections: [
            {slug: '', title: 'home.'},
            {slug: 'demo', title: 'demos.'},
            {slug: 'about', title: 'about.'},
            {slug: 'test', title: 'test'}
        ]
    };
};