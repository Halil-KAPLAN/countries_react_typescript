interface ILoadingProps {
  loading: boolean;
  children: React.ReactNode;
}

const Loading: React.FC<ILoadingProps> = (props) => {
  if (props.loading) {
    return <p>Loading....</p>;
  }
  return <>{props.children}</>;
};

export default Loading;
