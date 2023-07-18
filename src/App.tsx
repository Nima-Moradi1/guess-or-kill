import { useCallback, useEffect, useState } from "react"
import HangmanDrawing from "./components/HangManDrawing"
import HangmanWord from "./components/HangManWord"
import Keyboard from "./components/Keyboard"
import words from "./wordList.json"

// here i want to get a random word everytime
function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  //alert the user everytime the page loads 
  useEffect(() => {
    alert('شش فرصت داری تا کلمه رو درست حدس بزنی یا ادمای بی گناه کشته میشن..');
  }, []);

//creating usestate for letters to guess and the words to guess 
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
// we filter the incorrect words with this function
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )
// this is the logic to understand when we are winner or loser 
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))
// dynamically adding the letter that the user guessed 
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser]
  )
// here is the logic to understand what the user is clicking and not some random key !!
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])
// here is a useEffect for when the user clicks enter or else , enter is used for refreshing the page
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      // we set the new 
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)
// note that the return itself is a function and we created it cuz everytime we click a letter , it should stop 
// listening for that event and move on to the next one !
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])


// now we create our styles and divs !
  return (
    <div
      style={{
        height:"100vh" ,
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "1.4rem", textAlign: "center",fontWeight:"bold", color:"black", backgroundColor:"inherit" , borderRadius:"10px" , padding:"5px" }}>
       {isWinner && "متاسفانه نجات پیدا کرد دوستت"}
        <br/>
        {isWinner && "رفرش کن ببینم چند نفرو میتونی نجات بدی"}
        {isLoser && "...بخاطر کندذهنی تو، یه ادم بی گناه کشته شد"}
        <br/>
        {isLoser && "!رفرش کن ببینم چند تا به کشتن میدی !عحمق"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  )
}

export default App