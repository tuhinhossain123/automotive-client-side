
const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
            <h2 className="text-red-500 text-5xl font-semibold">404 Not Found</h2>
            <h2 className="text-center text-2xl font-bold pt-5 pb-3">Oops!!</h2>
            <p className="text-center font-bold">Sorry,an unexpected error has occurred!!</p>
            </div>
        </div>
    );
};

export default ErrorPage;