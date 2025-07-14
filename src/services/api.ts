export async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export async function fetchPosts(page: number, pageSize: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${pageSize}&_page=${page}`);
  return res.json();
} 