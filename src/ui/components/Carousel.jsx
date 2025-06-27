import Glide from '@glidejs/glide';
import { useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const Carousel = ({ images, id, title }) => {
    useEffect(() => {
        const glide = new Glide(`#${id}`, {
            type: 'slider',
            perView: 1,
            gap: 10,
            autoplay: images && images.length > 1 ? 4000 : false,
        });

        glide.mount();

        return () => {
            glide.destroy();
        };
    }, []);

    return (
        <div className='glide' id={id} key={id}>
            <div className='glide__track' data-glide-el='track'>
                <ul className='glide__slides'>
                    {images.map((image, i) => (
                        <li className='glide__slide' key={id + i}>
                            <img
                                src={`${image}`}
                                alt={title + i}
                                loading='lazy'
                                style={{
                                    height: '99%',
                                    width: '99%',
                                }}
                                className='customCarouselImage'
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='glide__bullets' data-glide-el='controls[nav]'>
                {images.map((image, i) => (
                    <button
                        className='glide__bullet'
                        data-glide-dir={`=${i}`}
                        key={i}
                    ></button>
                ))}
            </div>
            <div className='glide__arrows' data-glide-el='controls'>
                <button
                    className='glide__arrow glide__arrow--left customCarouselArrow'
                    data-glide-dir='<'
                    style={{
                        left: '1em',
                    }}
                >
                    <NavigateBeforeIcon
                        sx={{
                            width: '32px',
                            height: '32px',
                            color: 'secondary.main',
                        }}
                    />
                </button>
                <button
                    className='glide__arrow glide__arrow--right customCarouselArrow'
                    data-glide-dir='>'
                    style={{
                        right: '1em',
                    }}
                >
                    <NavigateNextIcon
                        sx={{
                            width: '32px',
                            height: '32px',
                            color: 'secondary.main',
                        }}
                    />
                </button>
            </div>
        </div>
    );
};
