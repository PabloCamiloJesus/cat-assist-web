import React from "react";

import { collection, setDoc, doc, getDoc } from "firebase/firestore";

import { db } from "../../services/firebase/firebase";

async function Data() {
  const docRef = doc(db, "reviews", "WXW06u11oX2LbCZIsnDE");

  const docSnap = await getDoc(docRef);

  console.log("inside func = ");
  console.log(docSnap.data());

  return docSnap.data();
}

const Teste = () => {
  var thing = Data();

  console.log("inside func = ");
  console.log(thing);

  return (
    <div style={{ height: 200, marginTop: 120 }}>
      <p>{thing.stars}</p>
    </div>
  );
};

export default Teste;
