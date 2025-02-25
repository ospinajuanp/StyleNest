export const filteredUsers = (keyword: string, users: any[]) => {
  users.filter(user => {
    const searchText = `${user.supplyList} ${user.description}`.toLowerCase();
    return searchText.includes(keyword.toLowerCase());
  }
  )
};