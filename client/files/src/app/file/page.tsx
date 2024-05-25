import classes from './page.module.css'

export default function File() {
    return (
        <main className={classes.main}>
            <br />
            <br />
            <br />
            <br />
            <h1>File Manage</h1>

            <div className={classes['file-manage']}>
                <div className={classes['file-manage-header']}>
                    <div className={classes['tabs']}>
                        <input type='radio' id='upload' name='tabs' defaultChecked></input>
                        <label htmlFor='upload'>New Upload</label>
                        <input type='radio' id='files' name='tabs'></input>
                        <label htmlFor='files'>Recent</label>
                        <div className={classes['tab-panels']}>
                            <div className={classes['tab-panel']}>
                                <input type='file' id='file' />
                                <label htmlFor='file'>Click to browse or drag and drop your files</label>
                            </div>
                            <div className={classes['tab-panel']}>
                                <p>Files</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
