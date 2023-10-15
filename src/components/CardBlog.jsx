import BlogData from '../utils/blogs.json';
import { Link } from 'react-router-dom';

export default function CardBlog() {
  return (
    <div className="flex flex-wrap justify-between space-x-0 lg:space-x-5">
      <div className="w-full flex flex-wrap justify-content-between">
        {BlogData.map(
          ({
            id,
            thumbnail,
            title,
            subtitle,
            image,
            author,
            duration,
            date,
          }) => (
            <div key={id} className="lg:w-4/12 mb-14 rounded-lg">
              <Link to="/blog/detail">
                <img src={thumbnail} className="mb-8 rounded-lg" />
                <div className="mb-8">
                  <h1 className="text-xl font-bold mb-2">{title}</h1>
                  <p className="text-lg text-paragraf/60">{subtitle}</p>
                </div>
              </Link>
              <span className="flex space-x-5 items-center">
                <div className="h-12 w-12 rounded-full">
                  <img src={image} alt={author} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold mb-1">{author}</h3>
                  <p className="text-sm text-paragraf/60">
                    {date} &bull; {duration} min read
                  </p>
                </div>
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
