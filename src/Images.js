import React from "react";

export default function Images(props) {
  if (props.defaultImageUrl) {
    return (
      <img
        src={props.defaultImageUrl}
        className="img-fluid rounded-pill border border-secondary border-3 m-2 shadow"
        width={250}
      />
    );
  } else {
    if (props.images) {
      console.log(props.images);
      return (
        <div className="Images">
          <section>
            {props.images.map(function (image, index) {
              return (
                <img
                  className="img-fluid mb-3"
                  src={image.src.landscape}
                  key={index}
                />
              );
            })}
          </section>
        </div>
      );
    }
  }
}
