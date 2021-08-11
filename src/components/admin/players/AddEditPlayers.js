import React, { Component } from "react";
import AdminLayout from "../../../Hoc/AdminLayout";
import FormField from "../../ui/formField";
import { validate } from "../../ui/misc";
import { firebasePlayers, firebaseDB, firebase } from "../../../firebase";
import Fileuploader from "../../ui/Fileuploader";

class AddEditPlayers extends Component {
  state = {
    playerId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    defaultImg: "",
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Player Name",
          name: "name_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showLabel: true,
      },
      lastname: {
        element: "input",
        value: "",
        config: {
          label: "Player Last Name",
          name: "lastname_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showLabel: true,
      },
      number: {
        element: "input",
        value: "",
        config: {
          label: "Player Number",
          name: "number_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showLabel: true,
      },
      position: {
        element: "select",
        value: "",
        config: {
          label: "Select a Position",
          name: "select_position",
          type: "select",
          options: [
            { key: "WR", value: "WR" },
            { key: "QB", value: "QB" },
            { key: "P", value: "P" },
            { key: "LB", value: "LB" },
            { key: "OL", value: "OL" },
            { key: "CB", value: "CB" },
            { key: "C", value: "C" },
            { key: "TE", value: "TE" },
            { key: "DB", value: "DB" },
            { key: "DL", value: "DL" },
            { key: "LS", value: "LS" },
            { key: "K", value: "K" },
            { key: "RB", value: "RB" },
            { key: "FB", value: "FB" },
            { key: "DT", value: "DT" },
            { key: "DE", value: "DE" },
          ],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showLabel: true,
      },
      image: {
        element: "image",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
    },
  };
  updateFields = (player, playerId, formType, defaultImg) => {
    const newFormdata = { ...this.state.formData };

    for (let key in newFormdata) {
      newFormdata[key].value = player[key];
      newFormdata[key].valid = true;
    }

    this.setState({
      playerId,
      defaultImg,
      formType,
      formData: newFormdata,
    });
  };
  componentDidMount() {
    const playerId = this.props.match.params.id;
    console.log(playerId);
    if (!playerId) {
      this.setState({
        formType: "Add Player",
      });
    } else {
      console.log(playerId);
      firebaseDB
        .ref(`players/${playerId}`)
        .once("value")
        .then((snapshot) => {
          const playerData = snapshot.val();

          firebase
            .storage()
            .ref("players")
            .child(playerData.image)
            .getDownloadURL()
            .then((url) => {
              this.updateFields(playerData, playerId, "Edit Player", url);
            })
            .catch((e) => {
              this.updateFields(
                {
                  ...playerData,
                  image: "",
                },
                playerId,
                "Edit player",
                ""
              );
            });
        });
    }
  }
  updateForm(element, content = "") {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };
    if (content === "") {
      newElement.value = element.event.target.value;
    } else {
      newElement.value = content;
    }
    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMsg = validData[1];
    newFormData[element.id] = newElement;

    this.setState({
      formError: false,
      formData: newFormData,
    });
  }
  submitForm(event) {
    event.preventDefault();
    let dataToSubmit = {};
    let isValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      isValid = this.state.formData[key].valid;
    }

    if (isValid) {
      console.log(dataToSubmit);
      if (this.state.formType === " Edit player") {
      } else {
        firebasePlayers
          .push(dataToSubmit)
          .then(() => {
            this.props.history.push("/admin_players");
          })
          .catch((e) => {
            this.setState({
              formError: true,
            });
          });
      }
    } else {
      this.setState({
        formError: true,
      });
    }
  }
  storeFilename = (filename) => {
    this.updateForm({ id: "image" }, filename);
  };
  resetImage = () => {
    const newFormData = { ...this.state.formData };
    newFormData["image"].value = "";
    newFormData["image"].valid = false;
    this.setState({
      defaultImg: "",
      formData: newFormData,
    });
  };
  render() {
    console.log(this.state.formData);
    return (
      <AdminLayout>
        <div className="editplayers_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={(event) => this.submitForm(event)}>
              <Fileuploader
                dir="players"
                tag={"Player Image"}
                defaultImg={this.state.defaultImg}
                defaultImgName={this.state.formData.image.value}
                resetImage={() => this.resetImage()}
                filename={(filename) => this.storeFilename(filename)}
              />
              <FormField
                id={"name"}
                formData={this.state.formData.name}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"lastname"}
                formData={this.state.formData.lastname}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"number"}
                formData={this.state.formData.number}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"position"}
                formData={this.state.formData.position}
                change={(element) => this.updateForm(element)}
              />
              <div className="success_label">{this.state.formSuccess}</div>
              {this.state.formError ? (
                <div className="error_label"> update successed</div>
              ) : null}
              <div className="admin_submit">
                <button onClick={(event) => this.submitForm(event)}>
                  {this.state.formType}
                </button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditPlayers;
