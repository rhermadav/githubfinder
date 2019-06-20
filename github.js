class Github {
  constructor() {
    this.client_id = '58b6a5c1a28e921d7f2f';
    this.client_secret = '84961ab29b73e10389b18995adb8c8488882f76ffec7';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }


  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }

}