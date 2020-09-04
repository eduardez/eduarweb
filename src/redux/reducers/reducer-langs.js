
import esp_ico from '../../assets/svg/internation/sp_lang.svg'
import eng_ico from '../../assets/svg/internation/en_lang.svg' 

import java_svg from '../../assets/svg/langs/java.svg'
import python_svg from '../../assets/svg/langs/piton.svg'
import sql from '../../assets/svg/langs/sql.svg'
import react from '../../assets/svg/langs/react.svg'
import visual from '../../assets/svg/langs/vbnet.svg'
import bootstrap from '../../assets/svg/langs/bootstrap.svg'

const languages = ([
    {
        name: 'Spanish',
        icon: esp_ico,
        levels: [
            {
                name: 'Java',
                level: '75',
                title: 'Avanzado',
                comments: 'Pues lo llevo dando desde hace mucho',
                icon: java_svg
            },    
            {
                name: 'SQL',
                level: '47',
                title: 'Intermediate',
                comments: 'Pues lo llevo dando desde hace mucho',
                icon: sql
            },
            {
                name: 'Python',
                level: '90',
                title: 'Advanced',
                comments: 'Pues lo llevo dando desde hace poco pero mejor',
                icon: python_svg
            },
            {
                name: 'React',
                level: '50',
                title: 'Intermediate',
                comments: 'De este no se demasiado',
                icon: react
            },
            {
                name: 'VB.net',
                level: '38',
                title: 'Intermediate',
                comments: 'De este no se demasiado',
                icon: visual
            },
            {
                name: 'Bootstrap',
                level: '50',
                title: 'Intermediate',
                comments: 'De este no se demasiado',
                icon: bootstrap
            }
        ],

    },
    {
        name: 'English',
        icon: eng_ico,
        levels: [
            {
                name: 'Java',
                level: '75',
                title: 'Advanced',
                comments: 'Pues lo llevo dando desde hace mucho',
                icon: java_svg
            },    
            {
                name: 'SQL',
                level: '47',
                title: 'Intermediate',
                comments: 'Pues lo llevo dando desde hace mucho',
                icon: sql
            },
            {
                name: 'Python',
                level: '90',
                title: 'Advanced',
                comments: 'Pues lo llevo dando desde hace poco pero mejor',
                icon: python_svg
            },
            {
                name: 'React',
                level: '50',
                title: 'Intermediate',
                comments: 'De este no se demasiado',
                icon: react
            },
            {
                name: 'VB.net',
                level: '38',
                title: 'Intermediate',
                comments: 'De este no se demasiado',
                icon: visual
            },
            {
                name: 'Bootstrap',
                level: '50',
                title: 'Intermediate',
                comments: 'De este no se demasiado',
                icon: bootstrap
            }
        ]
    }
       
])

export const initialLang = languages[0]

export default function(){
    return languages
}