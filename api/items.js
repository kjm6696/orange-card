export default async function handler(request, res) {
  const items = [
    {
      title: 'Heading for title',
      Image:
        'https://thumbs.dreamstime.com/b/transparent-designer-must-have-fake-background-39672616.jpg',
      memeTop: 'This is not',
      memeBottom: 'transparent',
    },
    {
      title: 'Shrek',
      Image:
        'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000',
      memeTop: 'Where is my',
      memeBottom: 'donkey!',
    },
    {
      title: 'Duck',
      Image:
        'https://images.freeimages.com/images/previews/54c/random-photography-3-1143357.jpg',
      memeTop: 'All i can say',
      memeBottom: 'is quack',
    },
    {
      title: 'Wooden Gorilla',
      Image:
        'https://www.thisiscolossal.com/wp-content/uploads/2017/04/MatRandom_12.jpg',
      memeTop: 'Im not a',
      memeBottom: 'Real gorilla',
    },
    {
      title: 'Rubber Duck',
      Image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqKBpp4ydpX2-nrgi-DFEnxHDThnD6HfkSNQ&usqp=CAU',
      memeTop: "I'm just",
      memeBottom: 'a toy',
    },
  ];

  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.json(items);
}
