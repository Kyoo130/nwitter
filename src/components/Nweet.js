import React, {useState} from 'react';
import {dbService} from "../fbase";

const Nweet = ({nweetObj, isOwner}) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const onDeletedClick = async () => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
    })
    setEditing(false);
  };

  const onChange = (event) => {
    const {target: {value}} = event;
    setNewNweet(value);
  }

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Edit your nweet" value={newNweet} required onChange={onChange}/>
            <input type="submit" value="Update Nweet"/>
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeletedClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
