import Button from "./Button";

function EventDetailInfo({ image, title }) {
  return (
    <div className="flex event-detail-info gap-x-4 items-center">
      <div className="p-2 rounded-xl border border-black">
        <img
          src={image}
          alt="merchandise-product.png"
          className="rounded-xl"
          width={36}
          height={36}
        />
      </div>
      <h4>{title}</h4>
    </div>
  );
}

export default EventDetailInfo;
