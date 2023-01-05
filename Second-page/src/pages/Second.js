import styles from "./Second.module.css";

const Second = () => {
  return (
    <div className={styles.home}>
      <div className={styles.iconTextParent}>
        <div className={styles.iconText}>
          <img
            className={styles.untickCircleIcon}
            alt=""
            src="../untickcircle.svg"
          />
          <div className={styles.text}>Internship Description</div>
        </div>
        <div className={styles.iconText1}>
          <img
            className={styles.untickCircleIcon}
            alt=""
            src="../untickcircle.svg"
          />
          <div className={styles.text}>Internship Guide</div>
        </div>
        <div className={styles.iconText1}>
          <img
            className={styles.untickCircleIcon}
            alt=""
            src="../untickcircle.svg"
          />
          <div className={styles.text}>Surveys</div>
        </div>
        <div className={styles.iconText1}>
          <img
            className={styles.untickCircleIcon}
            alt=""
            src="../untickcircle.svg"
          />
          <div className={styles.text}>Settings</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.iconTextWrapper}>
          <div className={styles.iconText}>
            <img
              className={styles.arrowLeftIcon}
              alt=""
              src="../arrowleft.svg"
            />
            <div className={styles.text}><a href="">Back</a></div>
          </div>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.text5}>Add New Internship</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.continueToNextStepParent}>
            <div className={styles.continueToNext}><a href="">Continue to Next Step</a></div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="../arrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.menuWrapper}>
            <img className={styles.untickCircleIcon} alt="" src="../menu.svg" />
          </div>
          <div className={styles.module}>
            <div className={styles.categoryParent}>
              <div className={styles.category}>Category</div>
              <img
                className={styles.untickCircleIcon}
                alt=""
                src="../tickcircle.svg"
              />
            </div>
            <img
              className={styles.untickCircleIcon}
              alt=""
              src="../arrowright1.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.menuWrapper}>
            <img className={styles.untickCircleIcon} alt="" src="../menu.svg" />
          </div>
          <div className={styles.module1}>
            <div className={styles.categoryParent}>
              <div className={styles.category}>Description</div>
              <img
                className={styles.untickCircleIcon}
                alt=""
                src="../tickcircle.svg"
              />
            </div>
            <img
              className={styles.arrowRightIcon2}
              alt=""
              src="../arrowright2.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.menuWrapper}>
            <img className={styles.untickCircleIcon} alt="" src="../menu.svg" />
          </div>
          <div className={styles.module1}>
            <div className={styles.locationParent}>
              <div className={styles.category}>Location</div>
              <img
                className={styles.untickCircleIcon}
                alt=""
                src="../tickcircle.svg"
              />
            </div>
            <img
              className={styles.arrowRightIcon2}
              alt=""
              src="../arrowright2.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.menuWrapper}>
            <img className={styles.untickCircleIcon} alt="" src="../menu.svg" />
          </div>
          <div className={styles.module1}>
            <div className={styles.locationParent}>
              <div className={styles.category}>Benefits</div>
              <img
                className={styles.untickCircleIcon}
                alt=""
                src="../tickcircle.svg"
              />
            </div>
            <img
              className={styles.arrowRightIcon2}
              alt=""
              src="../arrowright2.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.menuWrapper}>
            <img className={styles.untickCircleIcon} alt="" src="../menu.svg" />
          </div>
          <div className={styles.module1}>
            <div className={styles.locationParent}>
              <div className={styles.category}>Intro Video</div>
              <img
                className={styles.untickCircleIcon}
                alt=""
                src="../tickcircle.svg"
              />
            </div>
            <img
              className={styles.arrowRightIcon2}
              alt=""
              src="../arrowright2.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.menuWrapper}>
            <img className={styles.untickCircleIcon} alt="" src="../menu.svg" />
          </div>
          <div className={styles.module1}>
            <div className={styles.locationParent}>
              <div className={styles.category}>Mentor Details</div>
              <img
                className={styles.untickCircleIcon}
                alt=""
                src="../tickcircle.svg"
              />
            </div>
            <img
              className={styles.arrowRightIcon2}
              alt=""
              src="../arrowright2.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.menuWrapper}>
            <img className={styles.untickCircleIcon} alt="" src="../menu.svg" />
          </div>
          <div className={styles.module1}>
            <div className={styles.locationParent}>
              <div className={styles.category}>Recommended Roles</div>
              <img
                className={styles.untickCircleIcon}
                alt=""
                src="../tickcircle.svg"
              />
            </div>
            <img
              className={styles.arrowRightIcon2}
              alt=""
              src="../arrowright2.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent6}>
          <div className={styles.menuWrapper}>
            <img className={styles.untickCircleIcon} alt="" src="../menu.svg" />
          </div>
          <div className={styles.module1}>
            <div className={styles.locationParent}>
              <div className={styles.category}>{`Web Links & Resources`}</div>
              <img
                className={styles.untickCircleIcon}
                alt=""
                src="../tickcircle.svg"
              />
            </div>
            <img
              className={styles.arrowRightIcon2}
              alt=""
              src="../arrowright2.svg"
            />
          </div>
        </div>
        <div className={styles.assessment}>
          <div className={styles.addSquareParent}>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="../addsquare.svg"
            />
            <div className={styles.addMore}>Add More</div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.category}>Category</div>
        <div className={styles.textFieldParent}>
          <div className={styles.textField}>
            <div className={styles.text6}>Search Category</div>
            <input type="search" class="search"></input>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="../searchnormal.svg"
            />
            <img
              className={styles.icons16pxarrowDownFilled}
              alt=""
              src="../icons16pxarrowdownfilled.svg"
            />
          </div>
          <div className={styles.professionPillsParent}>
            <div className={styles.professionPills}>
              <div className={styles.technology}>Technology</div>
              <img className={styles.closeIcon} alt="" src="../close.svg" />
            </div>
            <div className={styles.professionPills}>
              <div className={styles.technology}>Development</div>
              <img className={styles.closeIcon} alt="" src="../close.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
