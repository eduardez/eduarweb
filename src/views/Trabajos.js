import React from 'react';
import {CustomContainer, Card} from '../components'
import './css/trabajos.css'

import web_svg from '../assets/svg/web_animated.svg'


const informacion = [
    [
        'Este trabajo', 
        web_svg,
        (<><p>Poner una descripcion cortita pero que ocupe lo suficiente como para un par de lineas, tambien poner puntos o algo en plan</p> <p>esto</p></>),
        '',
        ''
    ],
    [
        'Carrousel sin foto', 
        web_svg,
        (<><p>Tambien puedes poner una lista tipo:</p> <ul>esta lista: 
            <li>uno</li> 
            <li>dos</li>
            <li>tres</li>
            <li>catorce</li>
        </ul></>),
        'red',
        'body_reverse'
    ],
    [
        'Carrusel de 1 foto', 
        'https://as2.ftcdn.net/jpg/00/63/63/77/500_F_63637772_ePhONYTLkoJ3yiJTjc8ymObMlFFPLTvq.jpg',        
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra metus at diam interdum placerat. Mauris ac blandit est, sed semper odio. Nullam maximus justo sed nibh pulvinar, nec imperdiet tellus porta. Fusce pulvinar porttitor lacinia. Pellentesque tempus fringilla justo, sed lobortis est aliquam quis. Nulla nec suscipit ipsum. Phasellus consequat at dui a aliquet. Vivamus in nunc at risus placerat consequat sed ut lacus. Sed accumsan neque id libero iaculis, vitae sagittis orci egestas. Mauris semper quis purus suscipit bibendum. Maecenas at metus id ante ultrices bibendum ullamcorper mattis massa. Nam hendrerit, urna in feugiat commodo, magna metus lobortis libero, sed lacinia ipsum nulla nec neque. Cras scelerisque pellentesque laoreet. Nam arcu dolor, gravida eu pretium id, elementum at risus. ',
        '',
        ''
    ]
]

export default class Trabajos extends React.Component{

    render(){
        var information_mapped = informacion.map(function(info){
            return (<Card 
                id='trabajos_div_card' 
                title={info[0]} 
                image={info[1]} 
                card_text={info[2]}
                extension_class={info[3]}
                body_type={info[4]}
                />)
        })
        
        return(
            <CustomContainer>
                {window.scrollTo(0, 0)}
                <div className='trabajos_div'>
                    {information_mapped}
                </div>
            </CustomContainer>
        )
    }
}