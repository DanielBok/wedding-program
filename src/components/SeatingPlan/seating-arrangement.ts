export const seating = [
  {name: "Andrew Sng", table: 1, hidden: "Kng Wei Juan"},
  {name: "Edmond To", table: 1, hidden: "Regina Lim"},
  {name: "Eileen Bok", table: 1},
  {name: "Gelin Liu", table: 1, hidden: "Kai Yuan See"},
  {name: "Jiayu Yi", table: 1},
  {name: "Joseph Pua", table: 1},
  {name: "Kai Yuan See", table: 1, hidden: "Gelin Liu"},
  {name: "Kng Wei Juan", table: 1, hidden: "Andrew Sng"},
  {name: "Mama Bok", table: 1, hidden: "Eileen Bok"},
  {name: "Papa Bok", table: 1, hidden: "Eileen Bok"},
  {name: "Regina Lim", table: 1, hidden: "Edmond To"},
  {name: "Christine Ho", table: 2},
  {name: "Claire Zhang", table: 2, hidden: "Jonathan Chen"},
  {name: "Frank Chio", table: 2, hidden: "Sherry Qiao"},
  {name: "George Boyan", table: 2, hidden: "Stephanie Hur"},
  {name: "Jasper Tan", table: 2, hidden: "Shawn Quek"},
  {name: "Jonathan Chen", table: 2, hidden: "Claire Zhang"},
  {name: "Kendrick Sin", table: 2},
  {name: "Shawn Quek", table: 2, hidden: "Jasper Tan"},
  {name: "Sherry Qiao", table: 2, hidden: "Frank Chio"},
  {name: "Stephanie Hur", table: 2, hidden: "George Boyan"},
  {name: "Chyi Huey Ng", table: 3, hidden: "Danielle Thio"},
  {name: "Danielle Thio", table: 3, hidden: "Chyi Huey Ng"},
  {name: "Hao Yi", table: 3, hidden: "Yuri"},
  {name: "Justin Lau", table: 3},
  {name: "Thomas See", table: 3},
  {name: "Tingshan Tiong", table: 3},
  {name: "Weston Jackson", table: 3, hidden: "freaky dumpster"},
  {name: "Yuri Zhou", table: 3, hidden: "Hao Yi"},
  {name: "Angela Chan", table: 4},
  {name: "Dadders Quek", table: 4, hidden: "Kwang Meng"},
  {name: "Dwight Williams", table: 4},
  {name: "Janet Sum", table: 4},
  {name: "Liza Lee", table: 4},
  {name: "Mummers Quek", table: 4, hidden: "Ai Tin"},
  {name: "Patrick Chan", table: 4},
  {name: "Patrick Sum", table: 4},
  {name: "Patrick Yeung", table: 4},
  {name: "Christopher Cheng", table: 5},
  {name: "Fred Cheng", table: 5},
  {name: "Jane Tay", table: 5},
  {name: "Jonathan Lui", table: 5},
  {name: "Matthew Quek", table: 5},
  {name: "Natasha Chew", table: 5},
  {name: "Rita Tan", table: 5},
  {name: "Sarah Tong", table: 5},
  {name: "Shaun Ting", table: 5},
  {name: "Stella Mei", table: 5},
  {name: "Brian Dai", table: 6, hidden: "Jennifer Ong"},
  {name: "CY Chew", table: 6, hidden: "Nina Pei"},
  {name: "Connie Sun", table: 6, hidden: "Kevin Hsiao"},
  {name: "Eric Chan", table: 6, hidden: "Michele Lim"},
  {name: "Jennifer Ong", table: 6, hidden: "Brian Dai"},
  {name: "Kevin Hsiao", table: 6, hidden: "Connie Sun"},
  {name: "Michele Lim", table: 6, hidden: "Eric Chan"},
  {name: "Nina Pei", table: 6, hidden: "CY Chew"},
  {name: "Sisi Chen", table: 6},
  {name: "Tiffany Chiang", table: 6},
  {name: "Alex G", table: 7, hidden: "Nirasha"},
  {name: "Alika Savira", table: 7},
  {name: "Ben Charoenwong", table: 7},
  {name: "Erlangga Boenawan", table: 7},
  {name: "Joshua Lau", table: 7, hidden: "Vivian"},
  {name: "Julia Tan", table: 7},
  {name: "Maggie Mien", table: 7},
  {name: "Nigel Yee", table: 7},
  {name: "Nirasha Kunna", table: 7, hidden: "Alex"},
  {name: "Vivian Law", table: 7, hidden: "Joshua"},
  {name: "Ash", table: 8},
  {name: "Debra Pang", table: 8},
  {name: "Kimberly Lim", table: 8},
  {name: "Marline Luo", table: 8},
  {name: "Mervvyn Singh", table: 8},
  {name: "Rachel Yew", table: 8},
  {name: "Roy Pravin", table: 8},
  {name: "The Knees", table: 8, hidden: "Denise"},
  {name: "ressa nose", table: 8, hidden: "Vanessa"},
].map(x => ({
  ...x,
  tableName: getTableName(x.table)
}));


function getTableName(x: number) {
  switch (x) {
    case 1:
      return "Pearl";
    case 2:
      return "Elo";
    case 3:
      return "Mimolette";
    case 4:
      return "Crevette";
    case 5:
      return "Peanut";
    case 6:
      return "Tiger";
    case 7:
      return "Munster";
    case 8:
      return "Toulouse";
    default:
      throw new Error(`Invalid table number ${x}`);
  }
}
