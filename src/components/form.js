import { useState } from 'react'
import { useForm } from "react-hook-form";
import {usePlayerStore} from "../hooks/useStore";
// import Player from "../hooks/usePlayer";
// import Stopwatch from "../hooks/useStopwatch";

// import "./styles.css";

export default function Form(props) {

    const updatePlayer = usePlayerStore((state) => state.updatePlayer)
    const { setGameOn } = props;
    const [readyToPlay, setReadyToPlay] = useState(false)

    // const [ setName, setPhone, setEmail, setNewsletter ] = Player;

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log("RESULT", data);
        updatePlayer(data);
        setReadyToPlay(true);
        // setGameOn(true);
        // Stopwatch.setRunning(true);
        // alert(JSON.stringify(data));
    };
    console.log(errors);

    const readySetGo = () => {
        setGameOn(true);
        setReadyToPlay(false);
    }

    const ReadySetGoScreen = () => {
        return (
            <div>
                Get ready to play the timer will start when you press Go
                <button onClick={() => readySetGo()}>Go</button>
            </div>
        )
    }

    return (
        <div className='Form-container'>
            {!readyToPlay ?
            <form className='Form' onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input
                    type="text"
                    {...register("name", { required: true, maxLength: 80 })}
                />
                {/* <label>Last name</label>
                <input
                    type="text"
                    {...register("Last name", { required: true, maxLength: 100 })}
                /> */}
                <label>Email</label>
                <input
                    type="text"
                    {...register("email", {
                    required: true,
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
                />
                <label>Mobile number</label>
                <input
                    type="tel"
                    {...register("phone", {
                    required: true,
                    maxLength: 11,
                    minLength: 8
                    })}
                />
                {/* <label>Title</label>
                <select name="Title" {...register("title", { required: true })}>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select> */}
                <label>Sign up for newsletter</label>
                <input type="checkbox" placeholder="Sign up for newsletter" {...register("newsletter")} />

                <input type="submit" />
            </form> : <ReadySetGoScreen />
            }
        </div>
  );
}