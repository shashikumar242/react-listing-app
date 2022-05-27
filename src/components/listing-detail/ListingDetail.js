import React from "react";
import "./ListingDetail.css";

function ListingDetail() {
  return (
    <div className="listing-detail">
      <div className="listing-detail-content">
        <img className="listing-detail-img" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <h1 className="listing-detail-title">
          Awesome property
          <div className="listing-detail-action">
            <i class="listing-detail-action-icon fa-solid fa-pen-to-square"></i>
            <i class="listing-detail-action-icon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="listing-detail-meta-info">
          <span className="listing-detail-author">
            Author - <strong>John Doe</strong>
          </span>
          <span className="listing-detail-time">1 day ago</span>
        </div>
        <p className="listing-detail-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          tincidunt turpis, eu tincidunt ex. Integer sollicitudin sollicitudin
          nisl ac varius. Cras sed semper mi, non pretium tellus. Praesent
          dapibus consectetur libero vehicula dapibus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nulla at sapien ut turpis consectetur maximus sed sed orci. Etiam
          molestie gravida odio, ut commodo lacus rhoncus non. Vestibulum
          fermentum metus est, id bibendum lacus tincidunt et. Maecenas laoreet
          turpis ultrices congue elementum. Vivamus sed odio non sem dapibus
          dignissim. Etiam egestas augue risus, in semper felis imperdiet eget.
          Quisque sit amet pharetra sapien. Praesent non nulla vestibulum,
          molestie justo a, congue nisl. Aenean ipsum ligula, faucibus sit amet
          cursus vel, eleifend sit amet dolor. Nam sollicitudin gravida blandit.
          Nam hendrerit, orci at feugiat pulvinar, sapien tellus efficitur
          augue, sit amet finibus dui lectus eu ipsum. Nulla posuere porta
          feugiat. Nunc at nunc at libero sagittis malesuada. Aenean condimentum
          a augue sit amet vestibulum. Phasellus ante eros, efficitur et diam
          non, mattis interdum augue. Sed consectetur ligula lectus, vel
          tincidunt elit aliquam et. Etiam vitae eros mauris. Donec at massa
          enim. Maecenas vel orci metus. Proin id posuere sapien, et ultricies
          ante. 
        </p>
      </div>
    </div>
  );
}

export default ListingDetail;
