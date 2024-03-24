function MerchandiseCard({
  image,
  title,
  seller,
  availableStock,
  totalStock,
  icon,
}) {
  return (
    <div className="p-3 bg-primary-white rounded-xl">
      <div className="pb-5">
        <div className="relative">
          <img
            src={image}
            alt="merchandise-product.png"
            className="rounded-xl w-64"
          />
          <div className="flex gap-1 absolute -bottom-3 left-2 bg-black p-2 w-fit rounded-md items-center">
            <img src={icon} alt="clock-icon.svg" />
            <h6 className=" text-primary-white leading-none">9h 22m 25s</h6>
          </div>
        </div>
      </div>
      <div className="title-author pb-3">
        <h5 className="font-semibold leading-tight">{title}</h5>
        <h6 className="text-tertiary-grey font-normal">Sell by: {seller}</h6>
      </div>
      <h5 className="text-primary-music-jazz font-medium">
        {availableStock}/{totalStock} left
      </h5>
    </div>
  );
}

export default MerchandiseCard;
