export default function ServicesDescription({title, description}) {
    return (
        <div className="md:p-20 p-8 m-auto text-left min-w-0 w-full h-full overflow-hidden
        flex flex-col md:justify-center">
            <h1 className="xl:text-5xl md:text-4xl text-3xl font-bold">
                {title}
            </h1>
            <p className="my-4 text-primary-very-dark-gray">
                {description}
            </p>
            <a href="/" className="w-fit flex flex-row items-center gap-6
            fill-primary-black hover:fill-primary-dark-gray text-sm
            uppercase tracking-[1em] font-semibold hover:text-primary-dark-gray">
                Shop now
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"  fillRule="nonzero"/></svg>
            </a>
        </div>
    )
}