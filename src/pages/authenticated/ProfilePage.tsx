import { GetProfileByUsername, GetProfilePosts } from "@/actions/ProfileAction";
import { useAuth } from "@/context/AuthContext";
import Seo from "@/shared/components/Seo";
import Post from "@/shared/components/post/Post";
import { Profile } from "@/shared/components/profile/Profile";
import { ProfileMobile } from "@/shared/components/profile/ProfileMobile";
import { useToken } from "@/shared/hooks/useToken";
import { IPost } from "@/shared/models/post";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ProfilePage = () => {
  console.log("dando errado");
  const { id } = useParams();
  const { user: context } = useAuth();
  const navigate = useNavigate();

  const {
    response: profile,
    isSuccess,
    isLoading,
    isError,
    refetch,
  } = GetProfileByUsername(id!);

  function handleGoBack() {
    navigate(-1);
  }

  useEffect(() => {
    refetch();
  }, [id]);

  return (
    <div>
      <Seo title={"@" + profile?.username} />
      {isLoading && <div>Pedding...</div>}
      {isError && <div>Error</div>}
      {isSuccess && (
        <div className="flex flex-col h-full max-xl:border-0 gap-2 pl-3 pr-3 border-rebeccapurple2 border-r-2 border-l-2">
          <div className="flex flex-col gap-1">
            <div>
              <div className="fixed justify-center items-center top-0 flex p-2 w-full bg-black border-b-[1px] border-b-gray-500 sm:hidden ">
                <ChevronLeftIcon
                  cursor={"pointer"}
                  onClick={handleGoBack}
                  className="fixed w-6 h-6 left-3 top-2"
                ></ChevronLeftIcon>
                <h1 className="font-bold">{profile?.username}</h1>
              </div>
              {profile && (
                <>
                  <Profile profile={profile!} />
                  <ProfileMobile profile={profile!} />
                </>
              )}
            </div>
          </div>
          {profile?.posts.map((post: IPost) => (
            <Post
              key={post.uid}
              post={post}
              fullPage={false}
              fullBorder={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
