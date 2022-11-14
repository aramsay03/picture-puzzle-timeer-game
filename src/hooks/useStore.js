import create from 'zustand'
import axios from "axios";
// import { GoogleSpreadsheet } from "google-spreadsheet";

const baseURL = process.env.REACT_APP_AWS_API_BASEURL;

export const usePlayerStore = create((set) => ({
    name: "",
    email: "",
    phone: "",
    newsletter: false,
    timePlayed: "",
    gametime: 0,
    solved: false,
    updatePlayer: (data) => set({
        name: data.name,
        email: data.email,
        phone: data.phone,
        newsletter: data.newsletter,
    }),
    resetPlayer: () => set({
        name: "",
        email: "",
        phone: "",
        newsletter: false,
        timePlayed: 0,
        gametime: "",
        solved: false
    }),
    updateTime: (time) => set({
        gametime: time
    }),
    gameSolved: () => set({ solved: true, timePlayed: Date.now() }),
    // updatePlayer: (data) => set((state) => ({
    //     name: data.name,
    // })),
    // storeInDB: () => saveToDB(get((state)))
}))

export const useLeaderboardStore = create((set) => ({

}))

// function saveToDB() {
//     const playerData = usePlayerStore((state) => ({
//             name: state.name,
//             email: state.email,
//             phone: state.phone,
//             newsletter: state.newsletter,
//             timePlayed: state.timePlayed,
//             gametime: state.gametime,
//             solved: state.solved
//         })
//     )

//     axios
//         .post(baseURL, playerData)
//         .then((response) => {
//             console.log("API Post response: ",response.data);
//     });

// }
  
// function Controls() {
//     const increasePopulation = useStore((state) => state.increasePopulation)
//     return <button onClick={increasePopulation}>one up</button>
// }

// Need function that stores details in db and resets state.

// export default usePlayerStore;