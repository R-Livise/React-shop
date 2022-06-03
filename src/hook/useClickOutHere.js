import React from "react"

const useClickOutHere = () => {
    const [lastId, setLastId] = React.useState("")

    let foo = []

    const listenerClickOutHere = (e) => {

        const { uid: fooUid, wapper: fooWapper, uidS: fooUidS } = foo[0]

        if (!document.getElementById(fooUid).contains(e.target)) {

            fooWapper()

            if (foo.length === 1) {
                window.removeEventListener('click', listenerClickOutHere, true)
            }
            if (document.getElementById(fooUidS).contains(e.target)) {
                setLastId(fooUidS)
            } else {
                setLastId(fooUid)
            }
            foo.shift()
        }
    }

    const onClickOutHere = (uid, wapper, uidS) => {

        if (foo.length === 0) {

            window.addEventListener('click', listenerClickOutHere, true)
        }
        foo.push({ uid, wapper, uidS })


    }
    return {
        lastId,
        setLastId,
        onClickOutHere
    }
}

export { useClickOutHere }