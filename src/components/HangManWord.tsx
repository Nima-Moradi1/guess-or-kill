// again , we create a TYPE for passing props 
type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {

  // now we create a section for the letters user want to guess 
  return (
    <div
      style={{
        display: "flex",
        gap: ".2em",
        fontSize: "3rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
      // what we're doing here is that we are splitting the word to seperate letters for guessing!
    >      

      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid white" }} key={index}>
          <span
            style={{
              // here we say : if the guessed letter matches the correct letter , reveal it ; otherwise DON'T!
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "green",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}