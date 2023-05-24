import Directory from '../../components/directory/Directory.componrnt';

const Home = () => {

    const categories = [
        {
            id: 1,
            title: 'Climbing Equiment',
            imageUrl: 'https://images.unsplash.com/photo-1569783169977-8c84482eb0ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
        },
        {
            id: 2,
            title: 'Camping / Trekking',
            imageUrl: 'https://images.unsplash.com/photo-1601134917279-ef70a0a90f18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
        },
        {
            id: 3,
            title: 'Training',
            imageUrl: 'https://images.unsplash.com/photo-1593234270120-189e191918a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        },
        {
            id: 4,
            title: 'Clothing',
            imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
        },
        {
            id: 5,
            title: 'Footrwear',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1672280913342-06cfe011bc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1658&q=80'
        }
    ];
    return (
        <div className="">
            <Directory categories={categories} />
        </div>
    );
}

export default Home;
