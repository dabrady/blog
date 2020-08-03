import { useEffect, useState } from "react";

export default function useWishlist() {
  var [wishlist, setWishlist] = useState([]);

  useEffect(function loadWishlist() {
    (async function load() {
      console.info("[brady] loading wishlist!");
      var wishlist = await (await fetch("/.netlify/functions/wishlist", {
        method: "GET"
      })).json();
      console.info(wishlist);
      setWishlist(wishlist);
    })();
  }, []);

  return [
    wishlist,
    async function updateBalance(itemId, amount) {
      console.info(`[brady] updating item '${itemId} by $${amount}'`);
      var { balance } = await (await fetch("/.netlify/functions/wishlist", {
        method: "PUT",
        body: JSON.stringify({ itemId, amount })
      })).json();

      console.info("[brady] updating local balance");
      setWishlist(
        wishlist.map(function updateLocalBalance(item) {
          if (item.item_id != itemId) return item;
          return {
            ...item,
            balance
          };
        })
      );
    }
  ];
}
