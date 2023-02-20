import Image from "next/image";

const LocationPin = ({ text }: any) => (
    <div className="pin">
        <Image
            className="rounded-full object-fill"
            src={
                "/flag.png"
            }
            alt ="hi"
            width={30}
            height={30}
        />
        <p className="pin-text">{text}</p>
    </div>
)

export default LocationPin