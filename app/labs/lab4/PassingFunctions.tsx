export default function PassingFunctions({
  message,
  theFunction,
  nameFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  nameFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        onClick={nameFunction}
        id="wd-pass-functions-name-click"
        className="ms-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke My Name
      </button>
      <hr />
    </div>
  );
}
