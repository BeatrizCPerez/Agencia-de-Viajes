import React from 'react';

class VideoCard extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    hoverVideo = () => {
        this.videoRef.current.play();
    }

    hideVideo = () => {
        this.videoRef.current.pause();
    }

    render() {
        const { videoSrc, title, category, description } = this.props;

        return (
            <div className="md:w-1/2">
                <div className="wrap-video" onMouseEnter={this.hoverVideo} onMouseLeave={this.hideVideo}>
                    <video ref={this.videoRef} className="object-cover h-96 w-full" loop>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
                <span className="pt-4 grid grid-cols-6 gap-4">
                    <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">{title}</span>
                    <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                        <span>{category}</span>
                    </span>
                </span>
                <span className="block text-slate-400 text-xs uppercase font-mono">{description}</span>
            </div>
        );
    }
}

class Videos extends React.Component {
    render() {
        return (
            <div className="relative  min-h-screen flex-col bg-gradient-to-r from-blue-900 to-gray-800 hidden md:flex">
                <div className="min-h-28">
                    <div className="mx-auto py-4">
                        <h2 className="font-black text-white text-center text-2xl mt-10 uppercase">
                            ¡Descubre tus Próximas Vacaciones!
                        </h2>

                        <div className="gap-6 mt-8 mx-4 md:flex shadow-2xl">
                            <VideoCard
                                videoSrc="/snow.mp4"
                                title="Esquí en la Montaña"
                                category="Montañas"
                                description="Disfruta de la emoción del esquí en la nieve fresca de las montañas."
                            />
                            <VideoCard
                                videoSrc="/playa.mp4"
                                title="Relax en la Playa"
                                category="Playas"
                                description="Sumérgete en las aguas cristalinas y relájate en las playas de arena blanca."
                            />
                        </div>

                        <div className="gap-6 mt-8 mx-4 md:flex">
                            <VideoCard
                                videoSrc="/hotel.mp4"
                                title="Vacaciones en un Resort"
                                category="Hoteles"
                                description="Disfruta de servicios de lujo y entretenimiento en un resort todo incluido."
                            />
                            <VideoCard
                                videoSrc="montaña.mp4"
                                title="Aventuras en la Naturaleza"
                                category="Aventura"
                                description="Explora la naturaleza y participa en emocionantes actividades al aire libre."
                            />
                        </div>
                        <h2 className="font-black text-2xl text-white text-center uppercase my-16 hover:bg-white hover:text-black hover:rounded-full hover:px-6">
                            ¡Reserva Ahora y Vive una Experiencia Inolvidable!
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Videos;

