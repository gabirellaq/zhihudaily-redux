import React from 'react';
import { Link } from 'react-router-dom';
import '../css/slider.scss';
import filter from '../util/filter.js';
import Swiper from 'swiper';
window.Swiper = Swiper;

class Slider extends React.Component {
    componentDidMount () {
        new window.Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination'
            },
            paginationClickable: true,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 4000
            },
            autoplayDisableOnInteraction: false,
            observer: true,
            lazyLoading: true,
            resistanceRatio: 0
        })
    }
    render() {
        const slider = this.props.slider;
        return(
            <div className="slider">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {slider.map(item=>
                            <div key={item.id} className="swiper-slide" style={{backgroundImage: 'url(' + filter.replaceUrl(item.image) + ')' }} >
                                <Link to={`news/${item.id}`}>
                                    <span className="swiper-mask"></span>
                                    <span className="slider-title">{item.title}</span>
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}

export default Slider;