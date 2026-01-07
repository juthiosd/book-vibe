import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up your Bookshelf</h1>

                        <button className="btn btn-sucess mt-5">Veiw the list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;