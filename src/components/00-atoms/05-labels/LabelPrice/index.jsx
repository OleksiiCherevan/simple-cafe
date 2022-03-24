import "./index.scss";

const PriceLabel = (props) => {
    const { text, symbol='₴' } = props;

    return (
        <div className="price-label">
            {text}{symbol}
        </div>
    );
};

export default PriceLabel;
