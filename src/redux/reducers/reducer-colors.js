// DARK
const b_black = '#00080b'
const b_dark = '#12151c';
const b_dark_blue = '#1b222c';
const b_grey_dark = '#201f1f'
const b_rich_black = '#080705'


// LIGHT
const w_white = '#ffffff';
const w_not_so_white = '#f4f4f4'
const w_beish = '#f4f7c5'
const w_beige = '#EEEBD3'


// NEON
const ne_pine = '#3f6d4e';
const ne_green = '#8bd450'
const ne_dark_purple = '#1d1a2f'
const ne_light_purplu = '#965fd4'
const ne_purple = '#734f9a'

// PASTEL
const pa_aguamarina = '#557571'
const pa_salmon = '#d49a89'
const pa_grey = '#f7d1ba'
const pa_orange = '#ea907a'
const pa_yellow = '#fbc687'
const pa_cyan = '#aacdbe'
const pa_green = '#E2F0CB'

// MATERIAL
const mat_teal_blue = '#437C90'
const mat_maize = '#F7C548'
const mat_indigo = '#303F9F'
const mat_light_blue = '#029ca4'

const schemes = ([
    {
        name: 'Dark',
        primary: b_grey_dark,
        secondary: mat_light_blue,
        accent: mat_maize,
        header_bg: mat_light_blue,
        header_color: w_not_so_white,   
        body_bg: b_grey_dark,
        body_color: w_white,
        svg_color: mat_maize,

    },
    {
        name: 'Pastel',
        primary: pa_cyan,
        secondary: pa_cyan,
        accent: pa_yellow,       
        header_bg: pa_cyan,
        header_color: pa_aguamarina,   
        body_bg: pa_green,
        body_color: b_grey_dark,
        svg_color: pa_aguamarina,

    },
    {
        name: 'Material',
        primary: mat_teal_blue,
        secondary: mat_teal_blue,
        accent: mat_maize,
        header_bg: mat_teal_blue,
        header_color: w_white,   
        body_bg: w_not_so_white,
        body_color: b_grey_dark,
        svg_color: mat_teal_blue
    },
    {
        name: 'Neon',
        primary: ne_purple,
        secondary: ne_green,
        accent: ne_pine,
        header_bg: ne_green,
        header_color: ne_dark_purple,   
        body_bg: ne_dark_purple,
        body_color: w_white,
        svg_color: ne_green
    },
       
])

export const initialScheme = schemes[0]

export default function(){
    return schemes
}