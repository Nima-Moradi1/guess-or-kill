// here we are creating different parts of the human we wanna kill ! 

const HEAD = (
    <div
        style={{
            width: "30px",
            height: "30px",
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top: "30px",
            right: "-20px",
            borderColor:"#8B0000"
        }}
    />
);

const BODY = (
    <div
        style={{
            width: "10px",
            height: "80px",
            background: "black",
            position: "absolute",
            top: "78px",
            right: 0,
            backgroundColor:"#8B0000"
        }}
    />
);

const RIGHT_ARM = (
    <div
        style={{
            width: "60px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "128px",
            right: "-55px",
            rotate: "-30deg",
            transformOrigin: "left bottom",
            backgroundColor:"#8B0000"
        }}
    />
);

const LEFT_ARM = (
    <div
        style={{
            width: "60px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "128px",
            right: "5px",
            rotate: "30deg",
            transformOrigin: "right bottom",
            backgroundColor:"#8B0000"
        }}
    />
);

const RIGHT_LEG = (
    <div
        style={{
            width: "75px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "145px",
            right: "-65px",
            rotate: "60deg",
            transformOrigin: "left bottom",
            backgroundColor:"#8B0000"
        }}
    />
);

const LEFT_LEG = (
    <div
        style={{
            width: "75px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "145px",
            right: 0,
            rotate: "-60deg",
            transformOrigin: "right bottom",
            backgroundColor:"#8B0000"
        }}
    />
);

// here , to dynamically create the different body parts , we merge them into 1 const 
const BODY_PARTS = [
    HEAD,
    BODY,
    RIGHT_ARM,
    LEFT_ARM,
    RIGHT_LEG,
    LEFT_LEG,
];

// as you know , it typescript , we need to have a TYPE for passing down props ! 
type HangmanDrawingProps = {
    numberOfGuesses: number;
};

export default function HangmanDrawing({
    numberOfGuesses,
}: HangmanDrawingProps) {

    // now we create the hang and pass down the human !

    return (
        <div style={{ position: "relative"}}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div
                style={{
                    height: "30px",
                    width: "10px",
                    background: "black",
                    position: "absolute",
                    top: 0,
                    right: 0,
                }}
            />
            <div
                style={{
                    height: "10px",
                    width: "100px",
                    background: "black",
                    marginLeft: "70px",
                }}
            />
            <div
                style={{
                    height: "250px",
                    width: "10px",
                    background: "black",
                    marginLeft: "70px",
                }}
            />
            <div
                style={{
                    height: "10px",
                    width: "150px",
                    background: "black",
                }}
            />
        </div>
    );
}
