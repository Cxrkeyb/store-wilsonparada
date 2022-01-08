import React, { Fragment } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"
import Loader from '../../components/Loader/Loader';
import { useCollection} from '../../hooks/useCollection';
import img1 from '../../assets/img/slider/pcimage.jpg'
import img2 from '../../assets/img/slider/pcimage2.jpg'
import img3 from '../../assets/img/slider/pcimage3.jpg'
import { Slideshow, Slide, TextoSlide } from '../../components/Slideshow/Slideshow';

export default function ItemListContainer(){
    const {categoryId} = useParams();
    const { loading, data:products} = useCollection("products" ,categoryId)
    return (<Fragment>
                {
                    categoryId === undefined ? 
                    <Slideshow controles={true} autoplay={true} velocidad="1200" intervalo="10000">
                        <Slide>
                            <img src={img1} alt=""/>
                            <TextoSlide colorFondo='#9370DB50' colorLetra='#E6E6FA'>
                                <p>Pide tus componentes y empieza a armar tu pc</p>
                            </TextoSlide>
                        </Slide>
                        <Slide>
                            <img src={img2} alt=""/>
                            <TextoSlide>
                                <p>Disfruta de nuestro excelente servicio de entrega que te llega a la puerta de tú casa</p>
                            </TextoSlide>
                        </Slide> 
                        <Slide>
                            <img src={img3} alt=""/>
                            <TextoSlide colorFondo='#B2222250'>
                                <p>Arma tú pc gamer para juegos competitivos</p>
                            </TextoSlide>
                        </Slide>  
                    </Slideshow>:  null
                }
                <div className='containerItemList'>
                    {
                    loading ? <Loader /> : <ItemList products={products}/>
                    }
                </div>
            </Fragment>
    );
}
