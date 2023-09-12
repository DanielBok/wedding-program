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
  {name: "Ash", table: 4},
  {name: "Debra Pang", table: 4},
  {name: "Kimberly Lim", table: 4},
  {name: "Marline Luo", table: 4},
  {name: "Mervvyn Singh", table: 4},
  {name: "Rachel Yew", table: 4},
  {name: "Roy Pravin", table: 4},
  {name: "The Knees", table: 4, hidden: "Denise"},
  {name: "ressa nose", table: 4, hidden: "Vanessa"},
  {name: "Alex G", table: 5, hidden: "Nirasha"},
  {name: "Alika Savira", table: 5},
  {name: "Ben Charoenwong", table: 5},
  {name: "Erlangga Boenawan", table: 5},
  {name: "Julia Tan", table: 5},
  {name: "Maggie Mien", table: 5},
  {name: "Nigel Yee", table: 5},
  {name: "Nirasha Kunna", table: 5},
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
  {name: "Christopher Cheng", table: 7},
  {name: "Fred Cheng", table: 7},
  {name: "Jane Tay", table: 7},
  {name: "Jonathan Lui", table: 7},
  {name: "Matthew Quek", table: 7},
  {name: "Natasha Chew", table: 7},
  {name: "Rita Tan", table: 7},
  {name: "Sarah Tong", table: 7},
  {name: "Shaun Ting", table: 7},
  {name: "Stella Mei", table: 7},
  {name: "Angela Chan", table: 8},
  {name: "Dadders Quek", table: 8, hidden: "Kwang Meng"},
  {name: "Dwight Williams", table: 8},
  {name: "Janet Sum", table: 8},
  {name: "Liza Lee", table: 8},
  {name: "Mummers Quek", table: 8, hidden: "Ai Tin"},
  {name: "Patrick Chan", table: 8},
  {name: "Patrick Sum", table: 8},
  {name: "Patrick Yeung", table: 8}
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
      return "Banana";
    case 8:
      return "Monkey";
    default:
      throw new Error(`Invalid table number ${x}`);
  }
}
