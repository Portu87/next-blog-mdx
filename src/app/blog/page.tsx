import PostList from "@/components/PostList";
import PostPagination from "@/components/PostPagination";
import { getPagination} from '@/utils/pagination'

import { allPosts, Post } from "contentlayer/generated";
const posts: Post[] = allPosts.sort((a,b) => b.date.localeCompare(a.date));


export const metadata = {
  title: "Lista de todos los Posts",
  description: "Description All posts"  
}
const Posts = () => {
  const {currentPosts, totalPages} = getPagination(posts, 3)
  return (
    <>
      <div className="grid gap-4">
       <PostList posts={currentPosts}/>
       {
        totalPages > 1 && <PostPagination totalPages={totalPages} />
       }
      </div>
    </>
  );
};

export default Posts;
