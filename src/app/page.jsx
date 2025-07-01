import Comparison from "./Comparison";

export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          background: "#e3edff",
          backgroundImage:
            "radial-gradient(circle, rgba(227, 237, 255, 1) 0%, rgba(248, 249, 253, 1) 50%)",
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-base-content tracking-[-0.4px] leading-none">
              Update your resume on Drive without any extra steps
            </h1>
            <p className="py-6 text-base-content-secondary">
              Stop reuploading your resume every time you make a change. Resume
              Sync turns your Google Doc into a live PDF — always ready to
              share.
            </p>
            <button className="primary-btn">Try it in Google Docs</button>
          </div>
        </div>
      </div>
      <Comparison />
    </>
  );
}
