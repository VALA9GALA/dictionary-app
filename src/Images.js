import React, { useState } from "react";

export default function Images(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const isDefaultWord = props.keyword === props.defaultKeyword;
  if (isDefaultWord) {
    return (
      <img
        src={props.defaultImageUrl}
        className="img-fluid rounded-pill border border-secondary border-3 m-2 shadow"
        width={250}
        alt="VALAGALA- a gal named val"
      />
    );
  }

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  if (props.images) {
    console.log(props.images);

    return (
      <div>
        {props.images && (
          <div className="Images">
            <div className="row mt-2">
              {props.images.map((image, index) => (
                <div className="col-md-4" key={index}>
                  <img
                    className="img-thumbnail p-0 mt-1 mb-2 shadow-sm"
                    src={image.src.landscape}
                    alt={image.alt}
                    onClick={() => openModal(image.src.landscape)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          style={{ display: showModal ? "block" : "none" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden={!showModal}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content" style={{ background: "#eee5e9ff" }}>
              <div className="modal-body ">
                <button
                  type="button"
                  className="close btn btn-outline-info rounded-2"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <img
                  src={selectedImage}
                  className="img-fluid"
                  alt={"Enlarged View of Selection"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
