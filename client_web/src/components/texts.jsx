export const Title = ({ text }) => (
  <div>
    <p className="text-darktext text-xl font-Quicksandsemibold">{text}</p>
  </div>
);

export const TitleText = ({ text }) => (
  <div>
    <p className="text-darktext text-heading font-Quicksandmedium">{text}</p>
  </div>
);

export const SubTitleText = ({ text }) => (
  <div>
    <p className="text-darktext text-subheading font-Quicksandmedium">{text}</p>
  </div>
);

export const DescriptiveText = ({ text }) => (
  <div>
    <p className="text-descriptiveText text-center text-description font-Quicksandmedium">
      {text}
    </p>
  </div>
);

export const ErrorText = ({ text }) => (
  <div>
    <p className="text-red-500 text-description font-Quicksandmedium">{text}</p>
  </div>
);
