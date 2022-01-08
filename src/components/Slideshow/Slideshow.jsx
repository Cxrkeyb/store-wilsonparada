import React, {useRef, useEffect, useCallback} from 'react'
import {ReactComponent as FlechaDerecha} from '../../assets/img/slider/rightarrow.svg'
import {ReactComponent as FlechaIzquierda} from '../../assets/img/slider/leftarrow.svg'
import './Slideshow.css'
import styled from 'styled-components'

function Slideshow({children, controles= true, autoplay= false, velocidad="500", intervalo="5000"}) {
    const slideshow = useRef(null);
    const intervalSlideshow = useRef(null)

    const nextSlide = useCallback(()=> {
        if(slideshow.current.children.length > 0){
            const primerSlide = slideshow.current.children[0]
            // Añadimos el tipo de transición
            slideshow.current.style.transition = `${velocidad}ms ease-out all`;
            // Tomar el tamaño del slide
            const sizeSlide = slideshow.current.children[0].offsetWidth;
            // Cambiamos de slide
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;
            const transition = () =>{
            // Cambio de posición del primer slide
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = 'translateX(0)';
                // Tomamos el primer elemento y lo mandamos al final
                slideshow.current.appendChild(primerSlide);
                // Eliminar el evento
                slideshow.current.removeEventListener('transitionend', transition)
            }
            // Evento para cuando acaba la animación
            slideshow.current.addEventListener('transitionend', transition);
    }
    }, [velocidad])
    
    const beforeSlide = () => {
        if(slideshow.current.children.length > 0){
            // Detectar la cantidad de slides que existen en el slideshow
            const index = slideshow.current.children.length - 1;
            const ultimoSlide = slideshow.current.children[index]
            // Poner el último slide a la izquierda
            slideshow.current.insertBefore(ultimoSlide, slideshow.current.firstChild);
            slideshow.current.style.transition = 'none';
            // Tomar el tamaño del slide
            const sizeSlide = slideshow.current.children[0].offsetWidth;
            // Cambiamos de slide
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;
            setTimeout(()=> {
                slideshow.current.style.transition = `${velocidad}ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30)
        }
    }
    useEffect(()=> {
        if(autoplay){
            intervalSlideshow.current = setInterval(()=> {
                nextSlide()
            }, intervalo)
            // Eliminar el interval cuando el usuario pone el mouse sobre el slider
            slideshow.current.addEventListener('mouseenter', () => {
                clearInterval(intervalSlideshow.current)
            })
            // Volver a reanudar el autoplay
            slideshow.current.addEventListener('mouseleave', () => {
                intervalSlideshow.current = setInterval(()=> {
                    nextSlide()
                }, intervalo)
            })
        } 
    }, [autoplay, intervalo, nextSlide])

    return (
        <ContenedorPrincipal>
            <ContenedorSlideShow ref={slideshow}>
                {children}
            </ContenedorSlideShow>
            {
                controles && 
                <Controles>
                    <Boton onClick={beforeSlide}>
                        <FlechaIzquierda />
                    </Boton>
                    <Boton onClick={nextSlide} derecho>
                        <FlechaDerecha />
                    </Boton>
                </Controles>
            }
            
        </ContenedorPrincipal>
    );
}
const ContenedorPrincipal = styled.div`
    position: relative;
`;
const ContenedorSlideShow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;
const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: 0.3s ease all;
    z-index: 9;
    position: relative;
    img{
        width:100%;
        vertical-align: top;
        max-height: 500px
    }
`;
const TextoSlide = styled.div`
    background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,0.5)'};
    color: ${props => props.colorLetra ? props.colorLetra : '#fff'};
    padding: 10px 0;
    width:100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    @media screen and (max-width: 700px){
        position: relative;
        background: rgba(0, 0, 0, 1);
        padding: 1px 0;
    }
`;
const Boton = styled.div`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease all;
    &:hover{
        background(0,0,0,0.2);
        path{
            fill: #fff;
        }
    }

    ${props => props.derecho ? 'right: 0;': 'left: 0;'}
`;
const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 11;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;
export {Slideshow, Slide, TextoSlide}