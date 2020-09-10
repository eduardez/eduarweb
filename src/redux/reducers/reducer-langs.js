import React from 'react';

import esp_ico from '../../assets/svg/internation/sp_lang.svg'
import eng_ico from '../../assets/svg/internation/en_lang.svg' 

import java_svg from '../../assets/svg/langs/java.svg'
import python_svg from '../../assets/svg/langs/piton.svg'
import sql from '../../assets/svg/langs/sql.svg'
import react from '../../assets/svg/langs/react.svg'
import visual from '../../assets/svg/langs/vbnet.svg'
import bootstrap from '../../assets/svg/langs/bootstrap.svg'

import web_svg from '../../assets/svg/works/web_animated.svg'
import testtry from '../../assets/svg/works/testtry.svg'
import testtry_dbm from '../../assets/svg/works/testtry_dbm.svg'
import josefina from '../../assets/svg/works/josefina.svg'
import tftp from '../../assets/svg/works/TFTP.svg'


const languages = ([
    {
        name: 'Español',
        icon: esp_ico,
        navBar:{
            tab_1: 'Hola!',
            tab_2: 'Mis Proyectos',
            tab_3: 'Sobre mi',
        },

        // ------------------ HOME -----------------------------
        home:{
            header_1: 'Mis herramientas',
            header_2: 'Mi experiencia',
            header_3: 'Contacto',
            adj: ['Ingeniero Informático','Maker','Full Stack'],
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
                    title: 'Intermedio',
                    comments: 'Pues lo llevo dando desde hace mucho',
                    icon: sql
                },
                {
                    name: 'Python',
                    level: '90',
                    title: 'Avanzado',
                    comments: 'Pues lo llevo dando desde hace poco pero mejor',
                    icon: python_svg
                },
                {
                    name: 'React',
                    level: '50',
                    title: 'Intermedio',
                    comments: 'De este no se demasiado',
                    icon: react
                },
                {
                    name: 'VB.net',
                    level: '38',
                    title: 'Intermedio',
                    comments: 'De este no se demasiado',
                    icon: visual
                },
                {
                    name: 'Bootstrap',
                    level: '50',
                    title: 'Intermedio',
                    comments: 'De este no se demasiado',
                    icon: bootstrap
                }
            ],
            open: 'Abrir',
        },
        
        // ------------------- TRABAJOS ----------------------
        trabajos:[
            {
                title: 'Este Portfolio',
                icon: web_svg,
                description: (<>
                <span>Un portfolio dedicado a mostrar los trabajos que he ido haciendo
                a lo largo de mi carrera. En cuanto a esta aplicacion web, ha sido desarrollada
                usando node.js, React y CSS.</span> 
                <a className='card_link'
                    href='https://github.com/eduardez/LEDMatrixArduino'
                    target='_blank'>
                        Enlace
                </a></>)
            },
            {
                title: 'Testtty',
                icon: testtry,
                description: (<>
                <span>Una aplicacion web pensada para reforzar aquellas asignaturas
                    de tipo test, con una base de datos creada por las 
                    aportaciones de los alumnos</span> 
                <a className='card_link'
                    href='https://github.com/eduardez/LEDMatrixArduino'
                    target='_blank'>
                        Enlace
                </a></>)
            },
            {
                title: 'La Josefina',
                icon: josefina,
                description: (<>
                <span>Ejemplo de aplicacion para la gestion de un estableciomiento de 
                    comida casera. Se desarrollo usando Java y Java Swing y se tuvo
                    muy en cuenta los aspectos de usabilidad y dactores humanos (leyes de 
                    Gestalt, metaforas, seleccion adecuada de paleta...).</span> 
                <a className='card_link'
                    href='https://github.com/eduardez/Josefina'
                    target='_blank'>
                        Enlace
                </a></>)
            },
            {
                title: 'TFTP Protocol',
                icon: tftp,
                description: (<>
                <span>Una pequeña implementacion del protocolo TFTP (Trivial File Transfer Protocol)
                    en python</span> 
                <a className='card_link'
                    href='https://github.com/eduardez/LEDMatrixArduino'
                    target='_blank'>
                        Enlace
                </a></>)
            },
            {
                title: 'Testtry Database Manager ',
                icon: testtry_dbm,
                description: (<>
                <span>Escrita en python, es una aplicacion cuyo objetivo es manejar 
                    mas facilmente los archivos JSON que contienen todas las preguntas 
                    disponibles en Testtry.</span> 
                <a className='card_link'
                    href='https://github.com/eduardez/LEDMatrixArduino'
                    target='_blank'>
                        Enlace
                </a></>)
            },
            {
                title: 'Led Matrix Arduino',
                icon: '',
                description: (<>
                <span>Este programa lo desarrolle a finales de mi primer año
                    en la carrera y es de lo mas util que hice ese año. Sirve para
                    generar codigos de activacion para matrices led de 8x8.</span> 
                <a className='card_link'
                    href='https://github.com/eduardez/LEDMatrixArduino'
                    target='_blank'>
                        Enlace
                </a></>)
            },
        ]

        // ------------------- ABOUT ME ----------------------

        // -----------FIN ESP
    },
    {
        name: 'English',
        icon: eng_ico,
        navBar:{
            tab_1: 'Hi!',
            tab_2: 'My Proyects',
            tab_3: 'About me',
        },

        // ------------------ HOME -----------------------------
        home:{
            header_1: 'My Tools',
            header_2: 'Experience',
            header_3: 'Contact',
            adj: ['Computer Engineer','Maker','Full Stack',],
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
            ],
            open: 'Open',
        },

        // ------------------- TRABAJOS ----------------------

        trabajos:[
            {
                title: '',
                icon: '',
                description: ''
            }
        ]

        // ------------------- ABOUT ME ----------------------

        // -----------FIN ENG
    }   
])

export const initialLang = languages[0]

export default function(){
    return languages
}